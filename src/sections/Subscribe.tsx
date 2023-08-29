import Button from "../components/Button.tsx";

export default function Subscribe(): JSX.Element {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center gap-10 max-lg:flex-col"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <form className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="email"
          name="email"
          placeholder="subscribe@nike.com"
          className="input"
          required
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button type="submit" fullWidth>
            Sign Up
          </Button>
        </div>
      </form>
    </section>
  );
}
