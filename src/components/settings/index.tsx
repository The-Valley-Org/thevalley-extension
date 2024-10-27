import Button from "../button";

export default function SettingsForm() {
  return (
    <div className="pb-11">
      <form className="border-b border-[#D3D9E4] py-4">
        <div>
          <label htmlFor="" className="text-base font-semibold">
            Your email
          </label>

          <input
            type="text"
            className="py-3 px-4 rounded-lg border border-[#D3D9E4] block w-full  placeholder:text-[#ADBACC]"
            defaultValue={"thomasalfa@email.com"}
          />
        </div>

        <Button
          text="Update email"
          className="bg-lightGreen w-full border border-[#D3D9E4] text-base font-semibold text-white mt-4"
        />
      </form>

      <div>
        <Button
          text="Pay with"
          className="bg-[#5469D4] w-full border border-[#D3D9E4] text-base font-semibold text-white mt-4"
          icon={<StripeLogo />}
          iconPosition="right"
        />

        <button
          type="button"
          className="text-xs  font-medium text-[#5A6F8C] w-full text-center mt-4"
        >
          Cancel Payment
        </button>
      </div>
    </div>
  );
}

const StripeLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="18"
      viewBox="0 0 41 18"
      fill="none"
    >
      <g clipPath="url(#clip0_5607_964)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.9966 9.29874C40.9966 6.22346 39.5845 3.79688 36.8855 3.79688C34.1751 3.79688 32.5352 6.22346 32.5352 9.27472C32.5352 12.8906 34.4712 14.7165 37.2499 14.7165C38.6051 14.7165 39.63 14.3922 40.4044 13.9357V11.5331C39.63 11.9416 38.7418 12.1938 37.6143 12.1938C36.5097 12.1938 35.5303 11.7854 35.405 10.3679H40.9739C40.9739 10.2117 40.9966 9.58705 40.9966 9.29874ZM35.3708 8.15753C35.3708 6.80008 36.1566 6.23548 36.8741 6.23548C37.5688 6.23548 38.309 6.80008 38.309 8.15753H35.3708Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.1395 3.79688C27.0234 3.79688 26.306 4.34946 25.9074 4.73387L25.7593 3.98908H23.2539V17.996L26.101 17.3593L26.1124 13.9597C26.5223 14.272 27.1259 14.7165 28.1281 14.7165C30.1666 14.7165 32.0229 12.9867 32.0229 9.17862C32.0115 5.6949 30.1324 3.79688 28.1395 3.79688ZM27.4562 12.0737C26.7843 12.0737 26.3857 11.8214 26.1124 11.5091L26.101 7.05235C26.3971 6.70398 26.807 6.46372 27.4562 6.46372C28.4925 6.46372 29.21 7.68903 29.21 9.26271C29.21 10.8724 28.5039 12.0737 27.4562 12.0737Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.3359 3.08729L22.1944 2.4386V0L19.3359 0.636679V3.08729Z"
          fill="white"
        />
        <path d="M22.1944 4H19.3359V14.5112H22.1944V4Z" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2749 4.89007L16.0927 4.00112H13.6328V14.5123H16.4799V7.38874C17.1518 6.46375 18.2906 6.63193 18.6436 6.76407V4.00112C18.2792 3.85697 16.9468 3.59269 16.2749 4.89007Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5792 1.39258L7.80045 2.01724L7.78906 11.6395C7.78906 13.4174 9.05316 14.7268 10.7386 14.7268C11.6725 14.7268 12.3558 14.5466 12.7316 14.3304V11.8918C12.3671 12.0479 10.5678 12.6005 10.5678 10.8226V6.55809H12.7316V3.99936H10.5678L10.5792 1.39258Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.88123 7.05235C2.88123 6.58385 3.24565 6.40366 3.84923 6.40366C4.71474 6.40366 5.80801 6.67995 6.67352 7.17248V4.34946C5.72829 3.95304 4.79446 3.79688 3.84923 3.79688C1.53742 3.79687 0 5.07023 0 7.1965C0 10.512 4.32754 9.98347 4.32754 11.413C4.32754 11.9656 3.87201 12.1458 3.23427 12.1458C2.28904 12.1458 1.08188 11.7373 0.125271 11.1848V14.0438C1.18438 14.5243 2.25487 14.7285 3.23427 14.7285C5.60302 14.7285 7.23154 13.4912 7.23154 11.3409C7.22016 7.7611 2.88123 8.39778 2.88123 7.05235Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5607_964">
          <rect width="41" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
