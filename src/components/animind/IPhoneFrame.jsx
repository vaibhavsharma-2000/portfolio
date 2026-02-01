export default function IPhoneFrame(props) {
    return (
        <svg
            viewBox="0 0 460 996"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className={`w-full h-full pointer-events-none ${props.className || ""}`}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 12C35.2812 12 12 35.2812 12 64V932C12 960.719 35.2812 984 64 984H396C424.719 984 448 960.719 448 932V64C448 35.2812 424.719 12 396 12H64ZM0 64C0 28.6538 28.6538 0 64 0H396C431.346 0 460 28.6538 460 64V932C460 967.346 431.346 996 396 996H64C28.6538 996 0 967.346 0 932V64Z"
                fill="#1A1A1A"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M68 18C42.5949 18 22 38.5949 22 64V932C22 957.405 42.5949 978 68 978H392C417.405 978 438 957.405 438 932V64C438 38.5949 417.405 18 392 18H68ZM18 64C18 36.3858 40.3858 14 68 14H392C419.614 14 442 36.3858 442 64V932C442 959.614 419.614 982 392 982H68C40.3858 982 18 959.614 18 932V64Z"
                fill="#3F3F3F"
            />
            <path
                d="M165 34C165 25.7157 171.716 19 180 19H280C288.284 19 295 25.7157 295 34C295 42.2843 288.284 49 280 49H180C171.716 49 165 42.2843 165 34Z"
                fill="black"
            />
        </svg>
    );
}
