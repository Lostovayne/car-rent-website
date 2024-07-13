export const Footer = () => {
  return (
    <div className=" w-full px-12 pb-12 pt-16" >
      <div className="flex flex-col md:flex-row  justify-between  pb-6 ">

        <div className="md:w-[292px]">
          <h3 className="text-[#3563E9] font-bold text-[32px] pb-4">MORENT</h3>
          <p className="max-md:w-3/4 text-[#90A3BF] md:text-[#13131399]">Our visions is to provide convenience and help increase your sales business</p>
        </div>
        <div className="flex justify-between sm:justify-center max-md:py-6 gap-16 sm: px-12 md:pr-20">
          <div className="flex flex-col sm:flex-row gap-10 md:gap-16">

            <div className="flex flex-col gap-8">
              <p className="font-bold text-xl">About</p>
              <ol className="flex flex-col gap-4">
                <a className="text-[#90A3BF] md:text-[#13131399]" href="/">How it works</a>
                <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Featured</a>
                <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Partnership</a>
                <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Bussiness Relation</a>
              </ol>
            </div>
            <div className="flex flex-col gap-8">
              <p className="font-bold text-xl">Comunity</p>
              <ol className="flex flex-col gap-4">
                <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Events</a>
                <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Blog</a>
                <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Podcast</a>
                <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Invite a friend</a>
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-bold text-xl">Socials</p>
            <ol className="flex flex-col gap-4">
              <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Discord</a>
              <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Instagram</a>
              <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Twitter</a>
              <a className="text-[#90A3BF] md:text-[#13131399]" href="/">Facebook</a>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between border-t-2 font-bold border-[#131313] border-opacity-[16%] py-4">
        <p>2022 MORENT. All rights reserved</p>
        <ul className="flex gap-12  justify-between ">
          <a href="/">Privacy & Policy</a>
          <a href="/">Terms & Condition</a>
        </ul>
      </div>
    </div>
  )
}