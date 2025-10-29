"use client"
const ChatUsPage=()=>{
    const handleOpenToqi = () => {
        const wrapper = document.getElementById("toqi-chatbot-wrapper");
    
        if (wrapper) {
          wrapper.style.display =
            wrapper.style.display === "none" || !wrapper.style.display
              ? "block"
              : "none";
        }
      };
    return(
        <div>
        <div>
          <p className="lg:text-lg text-azaBlackShade3">Customer Support</p>
          <div className="flex items-center gap-3 px-3 mt-4 -mx-3 overflow-x-scroll scrollbar-none whitespace-nowrap lg:mt-4 lg:px-0 lg:mx-0">
            <button onClick={handleOpenToqi} className="flex items-center flex-1 h-10 px-6 py-1 space-x-2 text-xs border rounded-full cursor-pointer max-w-max border-azaBlackShade3 text-azaBlackShade3">
              < i className="ri-discuss-line"></i>

              <span className="flex items-center justify-center">Chat with us</span>
            </button>
            <a className="flex items-center flex-1 h-10 py-1 pl-6 pr-6 space-x-2 text-xs border rounded-full max-w-max border-azaBlackShade3 text-azaBlackShade3">
              <i className="ri-phone-line"></i>
              <span className="">022-42792123</span>
            </a>
            <a className="flex items-center flex-1 h-10 py-1 pl-6 pr-6 space-x-2 text-xs border rounded-full max-w-max border-azaBlackShade3 text-azaBlackShade3">
              < i className="ri-mail-send-line"></i>
              <span className="">Mail us</span>
            </a>
          </div>
        </div>
      </div>
    )
}

export default ChatUsPage