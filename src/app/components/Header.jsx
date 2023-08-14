import React from "react"

const Header = () => {
  return (
    <div className="flex items-center px-6 rounded-xl py-6 bg-[#2B324D] justify-between">
      <div className="">
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.57812 11.601L1.0393 12.1581L0.463421 11.601L1.0393 11.044L1.57812 11.601ZM20.9293 10.826C21.3574 10.826 21.7043 11.173 21.7043 11.601C21.7043 12.0291 21.3574 12.376 20.9293 12.376V10.826ZM11.79 22.557L1.0393 12.1581L2.11695 11.044L12.8676 21.443L11.79 22.557ZM1.0393 11.044L11.79 0.645028L12.8676 1.75911L2.11695 12.1581L1.0393 11.044ZM1.57812 10.826H20.9293V12.376H1.57812V10.826Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="">
        <h3 className="text-white text-base not-italic font-bold leading-6">
          Change Price
        </h3>
      </div>
      <div className="">
        <svg
          width="6"
          height="24"
          viewBox="0 0 6 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.58239 5.16478C4.00861 5.16478 5.16478 4.00861 5.16478 2.58239C5.16478 1.15618 4.00861 0 2.58239 0C1.15618 0 0 1.15618 0 2.58239C0 4.00861 1.15618 5.16478 2.58239 5.16478Z"
            fill="white"
          />
          <path
            d="M2.58239 14.5828C4.00861 14.5828 5.16478 13.4266 5.16478 12.0004C5.16478 10.5741 4.00861 9.41797 2.58239 9.41797C1.15618 9.41797 0 10.5741 0 12.0004C0 13.4266 1.15618 14.5828 2.58239 14.5828Z"
            fill="white"
          />
          <path
            d="M2.58239 23.9997C4.00861 23.9997 5.16478 22.8436 5.16478 21.4174C5.16478 19.9911 4.00861 18.835 2.58239 18.835C1.15618 18.835 0 19.9911 0 21.4174C0 22.8436 1.15618 23.9997 2.58239 23.9997Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}

export default Header
