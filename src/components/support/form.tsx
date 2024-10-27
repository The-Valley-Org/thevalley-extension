import Button from "../button";

export default function SupportForm() {
  return (
    <form className="mt-10">
      <div className="flex flex-col gap-6">
        <fieldset>
          <legend className="text-base font-semibold">Issues</legend>

          <ul className="mt-3">
            <li className="my-2">
              <input type="radio" />
              <label htmlFor="" className="text-base font-medium ml-2">
                Autofill
              </label>
            </li>
            <li className="my-2">
              <input type="radio" />
              <label htmlFor="" className="text-base font-medium ml-2">
                Pop up not showing up
              </label>
            </li>
            <li className="my-2">
              <input type="radio" />
              <label htmlFor="" className="text-base font-medium ml-2">
                Application not added to dashboard
              </label>
            </li>
            <li className="my-2">
              <input type="radio" />
              <label htmlFor="" className="text-base font-medium ml-2">
                Other (describe below)
              </label>
            </li>
          </ul>
        </fieldset>

        <div>
          <label htmlFor="" className="text-base font-semibold">
            Where the issue occured
          </label>

          <input
            type="text"
            className="py-3 px-4 rounded-lg border border-[#D3D9E4] block w-full  placeholder:text-[#ADBACC]"
            placeholder="Ex. Extension error(s)"
          />
        </div>

        <div>
          <label htmlFor="" className="text-base font-semibold">
            Describe the issues
          </label>

          <textarea
            name=""
            id=""
            className="min-h-[150px] w-full resize-none rounded-lg border  border-[#D3D9E4] py-3 px-4 placeholder:text-[#ADBACC]"
            placeholder="Tell us about the issues youre having on. more details can help us to identify the problem"
          ></textarea>
        </div>

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
          text="Save"
          className="bg-lightGreen w-full border border-[#D3D9E4] text-base font-semibold text-white"
          type="submit"
        />
      </div>
    </form>
  );
}
