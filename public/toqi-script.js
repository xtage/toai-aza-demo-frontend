// Constants
const API_URL = "https://an8nt5eo8g.execute-api.ap-south-1.amazonaws.com/stage";
const BASE_AUTH = "https://an8nt5eo8g.execute-api.ap-south-1.amazonaws.com/stage";
const STORE_ID = "store0000008";
const AUTH_CREDENTIALS = "lumi.admin@xtagelabs.com:lumi.admin.123";

// Global variables
let PRODUCT_ID = "134108"; // Default product ID
let session_id = "";
let chat_id = "";

// Utility Functions
function generateRandomId(length = 16) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from(
        { length },
        () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
}

function getOrCreateSessionId() {
    let sessionId = localStorage.getItem("randomId");
    if (!sessionId) {
        sessionId = generateRandomId();
        localStorage.setItem("randomId", sessionId);
    }
    return sessionId;
}

function getAuthHeaders() {
    return {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(AUTH_CREDENTIALS)}`,
    };
}

function scrollToBottom() {
    const chatResponseContainer = document.getElementById("chat-response");
    if (chatResponseContainer) {
        chatResponseContainer.scrollTop = chatResponseContainer.scrollHeight;
    }
}

function getPageContext() {
    const pathname = window.location.pathname;
    if (pathname === "/" || pathname === "/index.html") {
      return { type: "home", id: "" };
    } else if (pathname.includes("/collection")) {
      const categoryName = pathname.split("/collection/")[1]?.split("/")[0] || "";
      return { type: "category", id: "" };
    } else if (pathname.includes("/product")) {
      const productId = pathname.split("/product/")[1]?.split("/")[0] || "";
      return { type: "product", id: productId || PRODUCT_ID };
    }
  
    return { type: "unknown", id: "" };
  }
  

// API Functions
async function handleSessioninit() {
    try {
        const response = await fetch(
            `${API_URL}/api/v1/session/?session_id=${session_id}&store_id=${STORE_ID}&product_id=${PRODUCT_ID}`,
            {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    static_session_data: {
                        user_profile: {
                            is_logged_in: false
                        }
                    },
                    dynamic_session_data: {},
                    currency_conversion_rates: null,
                }),
            }
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Session initialization error:", error);
        throw error;
    }
}

async function handleSessionChat(){
    try {

        const response = await fetch(
            `${API_URL}/api/v1/session/chat/?chat_id=${chat_id}&store_id=${STORE_ID}`,
            {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    static_chat_data: {
                        chat:{
                            page: {
                                type:"home",
                                id: ""
                            },
                            channel: website
                        }
                    },
                    dynamic_session_data: {},
                    currency_conversion_rates: null,
                }),
            }
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        chat_id = data.chat_id;
        return data;
    } catch (error) {
        throw error;
    }
}

async function fetchPredefinedQuestions() {
    try {
        const response = await fetch(
            `${API_URL}/api/v1/questions/?product_id=${PRODUCT_ID}&session_id=${session_id}&store_id=${STORE_ID}`,
            {
                method: "GET",
                headers: getAuthHeaders(),
            }
        );

        if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);

        const data = await response.json();
        chat_id = data.chat_id;
        renderPredefinedQuestions(data.questions);
    } catch (error) {
        console.error("Error fetching predefined questions:", error);
    }
}

async function sendQuestionToAPI(questionId, questionText) {
    removeOldSuggestions();
    const payload = {
        questions: [
            {
                question_id: questionId,
                question: questionText,
            },
        ],
        product_id: PRODUCT_ID,
        session_id: session_id,
        chat_id: chat_id,
        customer_currency: "",
    };

    showLoader();

    try {
        const response = await fetch(
            `${API_URL}/api/v1/chat/?store_id=${STORE_ID}`,
            {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify(payload),
            }
        );

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        hideLoader();
        processAPIResponse(data);
    } catch (error) {
        hideLoader();
        processAPIError();
        console.error("Error sending question:", error);
    }
}

async function sendAnalyticsData(payload) {
    try {
        const response = await fetch(
            `${BASE_AUTH}/api/v1/populate_data/?store_id=${STORE_ID}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${btoa(AUTH_CREDENTIALS)}`,
                },
                body: JSON.stringify(payload),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                `HTTP error! status: ${response.status}, ${JSON.stringify(errorData)}`
            );
        }

        return await response.json();
    } catch (error) {
        console.error("Analytics data error:", error);
        throw error;
    }
}

// UI Functions
function removeOldSuggestions() {
    const predefinedQuestionsContainer = document.getElementById("predefined-questions");
    if (predefinedQuestionsContainer) {
        predefinedQuestionsContainer.style.display = "none";
        predefinedQuestionsContainer.innerHTML = "";
    }
}

function renderPredefinedQuestions(questions) {
    const predefinedQuestionsContainer = document.getElementById("predefined-questions");
    if (!predefinedQuestionsContainer) return;

    predefinedQuestionsContainer.innerHTML = "";
    if (!Array.isArray(questions)) return;
    
    predefinedQuestionsContainer.style.display = "flex";
    questions.forEach((question) => {
        const button = document.createElement("button");
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M10 3h4v2h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17h2a6 6 0 0 0 6-6h2a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8"/>
            </svg>
            ${question.question}
        `;

        button.dataset.questionId = question.question_id;
        button.dataset.questionText = question.question;
        button.addEventListener("click", handlePredefinedQuestionClick);
        predefinedQuestionsContainer.appendChild(button);
    });
    scrollToBottom();
}

function displayQuestion(questionText) {
    const chatResponseContainer = document.getElementById("chat-response");
    if (!chatResponseContainer) return;

    chatResponseContainer.classList.remove("hidden");

    const pairElement = document.createElement("div");
    pairElement.classList.add("pair");

    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
        ${questionText}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M10 3h4v2h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17h2a6 6 0 0 0 6-6h2a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8"/>
        </svg>
    `;

    pairElement.appendChild(questionElement);
    chatResponseContainer.appendChild(pairElement);
    scrollToBottom();
}

function processAPIError(errorMessage = "Sorry, I don't have enough information to answer that right now. Could you try asking me something else?") {
    const chatResponseContainer = document.getElementById("chat-response");
    if (!chatResponseContainer) return;

    const lastPairElement = chatResponseContainer.lastElementChild;
    if (!lastPairElement) return;

    const answerElement = document.createElement("div");
    answerElement.classList.add("answer", "error-answer");

    const answerText = document.createElement("p");
    answerText.innerHTML = errorMessage;
    answerElement.appendChild(answerText);

    const reviewIcon = document.createElement("div");
    reviewIcon.classList.add("review-icon");
    reviewIcon.innerHTML = '<i class="ri-thumb-up-line"></i> <i class="ri-thumb-down-line"></i>';
    answerElement.appendChild(reviewIcon);

    setupReviewButtons(reviewIcon);
    lastPairElement.appendChild(answerElement);
    scrollToBottom();
}

function processAPIResponse(data) {
    const chatResponseContainer = document.getElementById("chat-response");
    if (!chatResponseContainer) return;

    const lastPairElement = chatResponseContainer.lastElementChild;
    if (!lastPairElement) return;

    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");

    // Add answer text
    const answerText = document.createElement("p");
    if (Array.isArray(data.answers.answer.urls) && data.answers.answer.urls.length > 0) {
        let text = data.answers.answer.text.replace(/<br\s*\/?>/gi, " ").trim();

        data.answers.answer.urls.forEach((item) => {
            const link = document.createElement("a");
            link.href = item.url;
            link.target = "_blank";
            link.textContent = item.display_name;
            link.style.color = "#e0b444";
            link.style.marginLeft = "4px";
            link.style.textDecoration = "underline";

            answerText.innerHTML = text;
            answerText.appendChild(link);
        });
    } else {
        answerText.innerHTML = data.answers.answer.text;
    }

    answerElement.appendChild(answerText);

    // Add table if exists
    if (Array.isArray(data.answers.answer.table) && data.answers.answer.table.length > 0) {
        const table = createTableFromJson(data.answers.answer.table);
        answerElement.appendChild(table);
    }

    // Add suggested products if exists
    if (data.answers.answer.suggested && data.answers.answer.suggested.length > 0) {
        const similarContainer = document.createElement("div");
        similarContainer.classList.add("similar-products");
        similarContainer.innerHTML = "<br/>";

        data.answers.answer.suggested.forEach((product) => {
            createProductPreview(
                product.url,
                product.description,
                product.feature_image,
                product.hyperlink_id,
                product.product,
                (previewElement) => {
                    similarContainer.appendChild(previewElement);
                }
            );
        });

        answerElement.appendChild(similarContainer);
    }

    // Add review container
    const reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review-container");
    reviewContainer.innerHTML = `
        <p class="warnText">AI can make mistakes, so double-check responses!</p>
        <div class="review-icon">
            <i class="ri-thumb-up-line"></i>
            <i class="ri-thumb-down-line"></i>
        </div>
    `;

    answerElement.appendChild(reviewContainer);
    const reviewIcon = reviewContainer.querySelector(".review-icon");
    setupReviewButtons(reviewIcon);

    lastPairElement.appendChild(answerElement);
    scrollToBottom();

    // Update predefined questions if needed
    if (data.questions) {
        renderPredefinedQuestions(data.questions);
    }
}

function createTableFromJson(tableData) {
    const tableWrapper = document.createElement("div");
    tableWrapper.classList.add("comparison-table");

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const allKeys = Object.keys(tableData[0]);

    allKeys.forEach((key) => {
        const th = document.createElement("th");
        th.innerText = key;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    tableData.forEach((row) => {
        const tr = document.createElement("tr");
        allKeys.forEach((key) => {
            const td = document.createElement("td");
            td.innerText = row[key] || "";
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    tableWrapper.appendChild(table);
    return tableWrapper;
}

function createProductPreview(url, description, image, hyperlinkId, title, callback) {
    const previewContainer = document.createElement("div");
    previewContainer.classList.add("link-preview");
    previewContainer.style.border = "1px solid #ddd";
    previewContainer.style.borderRadius = "8px";
    previewContainer.style.overflow = "hidden";
    previewContainer.style.padding = "8px";
    previewContainer.style.backgroundColor = "white";

    const previewContent = document.createElement("div");
    previewContent.style.display = "flex";
    previewContent.style.alignItems = "center";
    previewContent.style.gap = "10px";

    // Image
    const previewImage = document.createElement("img");
    previewImage.src = image;
    previewImage.alt = title;
    previewImage.style.width = "80px";
    previewImage.style.height = "80px";
    previewImage.style.objectFit = "cover";
    previewImage.style.borderRadius = "4px";
    previewContent.appendChild(previewImage);

    const previewInfo = document.createElement("div");
    previewInfo.style.flex = "1";

    // Title
    const previewTitle = document.createElement("a");
    previewTitle.href = url;
    previewTitle.target = "_blank";
    previewTitle.textContent = title;
    previewTitle.style.display = "block";
    previewTitle.style.color = "#e0b444";
    previewTitle.style.marginBottom = "4px";
    previewTitle.style.textDecoration = "none";
    previewTitle.style.fontWeight = "bold";

    previewTitle.addEventListener("click", () => handleHyperLinkClick(hyperlinkId));
    previewInfo.appendChild(previewTitle);

    // Description
    const previewDescription = document.createElement("div");
    previewDescription.style.margin = "4px 0";
    previewDescription.style.color = "#555";
    previewDescription.style.fontSize = "12px";

    const fullText = description || "";
    const charLimit = 150;
    const needsTruncation = fullText.length > charLimit;
    const truncatedText = needsTruncation
        ? fullText.slice(0, charLimit).trim() + "..."
        : fullText;

    const descText = document.createElement("span");
    descText.textContent = truncatedText;
    previewDescription.appendChild(descText);

    if (needsTruncation) {
        const toggleSpan = document.createElement("span");
        toggleSpan.textContent = " Show more";
        toggleSpan.style.color = "#8D378D";
        toggleSpan.style.cursor = "pointer";
        toggleSpan.style.fontWeight = "500";
        toggleSpan.style.marginLeft = "4px";

        toggleSpan.addEventListener("click", (e) => {
            e.preventDefault();
            if (descText.textContent === truncatedText) {
                descText.textContent = fullText;
                toggleSpan.textContent = " Show less";
            } else {
                descText.textContent = truncatedText;
                toggleSpan.textContent = " Show more";
            }
        });

        previewDescription.appendChild(toggleSpan);
    }

    previewInfo.appendChild(previewDescription);
    previewContent.appendChild(previewInfo);
    previewContainer.appendChild(previewContent);

    callback(previewContainer);
}

function setupReviewButtons(reviewIcon) {
    const thumbUp = reviewIcon.querySelector(".ri-thumb-up-line");
    const thumbDown = reviewIcon.querySelector(".ri-thumb-down-line");

    thumbUp.addEventListener("click", function () {
        if (this.classList.contains("ri-thumb-up-line")) {
            this.classList.replace("ri-thumb-up-line", "ri-thumb-up-fill");
            thumbDown.classList.replace("ri-thumb-down-fill", "ri-thumb-down-line");
        } else {
            this.classList.replace("ri-thumb-up-fill", "ri-thumb-up-line");
        }
    });

    thumbDown.addEventListener("click", function () {
        if (this.classList.contains("ri-thumb-down-line")) {
            this.classList.replace("ri-thumb-down-line", "ri-thumb-down-fill");
            thumbUp.classList.replace("ri-thumb-up-fill", "ri-thumb-up-line");
        } else {
            this.classList.replace("ri-thumb-down-fill", "ri-thumb-down-line");
        }
    });
}

function showLoader() {
    const chatResponseContainer = document.getElementById("chat-response");
    if (!chatResponseContainer) return;

    const loader = document.createElement("div");
    loader.id = "loader";
    chatResponseContainer.appendChild(loader);

    const inputButton = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    if (inputButton) inputButton.disabled = true;
    if (sendButton) {
        sendButton.classList.add("disabled");
        sendButton.disabled = true;
    }

    scrollToBottom();
}

function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.remove();

    const inputButton = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    if (inputButton) inputButton.disabled = false;
    if (sendButton) {
        sendButton.classList.remove("disabled");
        sendButton.disabled = false;
    }
}

// Event Handlers
function handlePredefinedQuestionClick(event) {
    const questionId = event.currentTarget.dataset.questionId;
    const questionText = event.currentTarget.dataset.questionText;
    displayQuestion(questionText);
    sendQuestionToAPI(questionId, questionText);
}

function handleUserQuestion() {
    const userInput = document.getElementById("user-input");
    if (!userInput) return;

    const questionText = userInput.value.trim();
    if (questionText) {
        displayQuestion(questionText);
        sendQuestionToAPI(null, questionText);
        userInput.value = "";
    }
}

function handleHyperLinkClick(hyperlinkId) {
    const timestamp = new Date().toISOString();
    const payload = {
        table_name: "hyperlink_clicks",
        data: {
            hyperlink_id: hyperlinkId,
            click_timestamp: timestamp,
        },
    };
    sendAnalyticsData(payload);
}

// Button Analytics Functions
function handleButtonClick(buttonType, callback) {
    const timestamp = new Date().toISOString();

    const dataPayload = {
        user_id: "default",
        session_id: session_id,
        product_id: PRODUCT_ID,
        chat_id: chat_id,
        timestamp: timestamp,
    };

    if (buttonType === "buynow") {
        dataPayload.buynow_click = 1;
    } else if (buttonType === "addtocart") {
        dataPayload.add_to_cart_click = 1;
    }

    const analyticsPayload = {
        table_name: "analytics_data",
        data: dataPayload,
    };

    const timeout = setTimeout(() => {
        callback();
    }, 800);

    sendAnalyticsData(analyticsPayload)
        .then(() => {
            clearTimeout(timeout);
            callback();
        })
        .catch((err) => {
            clearTimeout(timeout);
            callback();
        });
}

// Initialization
function initializeChat() {
    session_id = getOrCreateSessionId();
    handleSessioninit();
    fetchPredefinedQuestions();

    // Set up event listeners
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");

    if (sendButton) {
        sendButton.addEventListener("click", handleUserQuestion);
    }

    if (userInput) {
        userInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") handleUserQuestion();
        });
    }

    // Set up button analytics
    setupButtonAnalytics();
}

function setupButtonAnalytics() {
    const checkButtonInterval = setInterval(() => {
        const buyNowButtons = document.querySelectorAll(".sr-headless-checkout");
        const addToCartButtons = document.querySelectorAll('button[name="add"]');

        // Attach Buy Now listeners
        if (buyNowButtons.length > 0) {
            buyNowButtons.forEach((btn) => {
                if (!btn.dataset.listenerAttached) {
                    btn.dataset.listenerAttached = "true";
                    btn.addEventListener("click", function (event) {
                        event.preventDefault();
                        handleButtonClick("buynow", () => {
                            btn.click();
                        });
                    });
                }
            });
        }

        // Attach Add to Cart listeners
        if (addToCartButtons.length > 0) {
            addToCartButtons.forEach((btn) => {
                if (!btn.dataset.listenerAttached) {
                    btn.dataset.listenerAttached = "true";
                    btn.addEventListener("click", function (event) {
                        event.preventDefault();
                        handleButtonClick("addtocart");
                    });
                }
            });
        }

        // Stop interval once both sets of buttons are found
        if (buyNowButtons.length > 0 && addToCartButtons.length > 0) {
            clearInterval(checkButtonInterval);
        }
    }, 300);
}

// Export functions for global use
window.ChatAssistant = {
    initializeChat,
    setProductId: (productId) => { PRODUCT_ID = productId; },
    handleUserQuestion,
    handlePredefinedQuestionClick,
    handleButtonClick
};
if (window.ChatAssistant && typeof window.ChatAssistant.initializeChat === "function") {
    window.ChatAssistant.initializeChat();
}
