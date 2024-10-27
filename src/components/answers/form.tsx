import CustomCheckbox from "../checbox";
import DropDown from "../dropdown";

export default function AnswersForm() {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <DropDown
          label="Startup Question & Answer (1)"
          desc="This all question about Startup , you can add all 
of them in here and fill automatically"
        >
          <div>
            <div className="flex justify-between items-center mt-5">
              <h1 className="text-xs font-medium">
                Write first question here ?{" "}
                <span>
                  <button className="text-lightGreen">Edit</button>
                </span>
              </h1>

              <CustomCheckbox />
            </div>
            <textarea
              name=""
              id=""
              placeholder="  Write your answer here, make it more detail based on your needs"
              className="w-full border p-3 rounded mt-3 placeholder:text-xs placeholder:font-medium placeholder:text-[#313A49]"
            ></textarea>
          </div>
        </DropDown>

        <DropDown
          label="Founder Profile Fields (17)"
          desc="This is status for All Fields. you can 
check it one by one"
        >
          <div className="flex flex-col gap-2 mt-5">
            <CustomCheckbox label="Photo" />
            <CustomCheckbox label="First Name" />
            <CustomCheckbox label="Last Name" />
          </div>
        </DropDown>

        <DropDown
          label="Company Profile Fields (9)"
          desc="This is status for All Fields. you can 
check it one by one"
        >
          <div className="flex flex-col gap-2 mt-5">
            <CustomCheckbox label="Photo" />
            <CustomCheckbox label="Company Name" />
            <CustomCheckbox label="Email" />
          </div>
        </DropDown>
      </div>
    </form>
  );
}
