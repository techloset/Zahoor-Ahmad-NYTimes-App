import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="min-h-[50vh] font-Nunito text-center sm:mt-[10%] mt-[35%]">
        <h1 className="text-6xl my-10 ">ERROR 404</h1>
        <p className="text-xl my-10">This Page Doesn't Exist</p>
        <Link
          to={"/"}
          className="py-3 bg-slate-900 text-white px-10 rounded-lg"
        >
          Go Back
        </Link>
      </div>
    </>
  );
}

export default Error;
