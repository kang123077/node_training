const ModalCloseButton = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_95_182)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9023 22L3.11999 5.11111L5.21777 3L22 19.8889L19.9023 22Z"
          fill="#494949"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.8801 5.11115L5.09778 22L3 19.8889L19.7823 3.00004L21.8801 5.11115Z"
          fill="#494949"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_95_182"
          x="0"
          y="0"
          width="27"
          height="27"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_95_182"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_95_182"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ModalCloseButton;
