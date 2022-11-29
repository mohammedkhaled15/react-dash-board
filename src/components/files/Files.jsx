import { FileIcon } from "react-file-icon"
import { BiDownload } from "react-icons/bi"
import Divider from "../utilitis/Divider"

const files = Array(24).fill({
  bgColor: "red",
  extension: "pdf",
  name: "my-file",
  uploader: "Admin",
  date: "16 / 5 / 2021",
  size: "2.1MB",
})

const Files = () => {
  return (
    <section className='lg:col-span-10 col-span-11'>
      <h1 className='title'>Files</h1>
      <main className='flex flex-wrap '>
        <div className="w-[90%] grid grid-cols-12 gap-1">
          {
            files.map((file, index) => {
              return (
                <div className=" p-1 bg-white rounded-lg col-span-12 md:col-span-4 lg:col-span-2">
                  <span className="mb-2"><BiDownload color={"#ccc"} /></span>
                  <div className="w-[30%] mx-auto mb-2">
                    <FileIcon color={file.bgColor} extension={file.extension} type="acrobat" />
                  </div>
                  <h6 className="text-center text-sm mb-2">{file.name + "." + file.extension}</h6>
                  <h6 className="text-text-gray text-sm">{file.uploader}</h6>
                  <Divider />
                  <div className="text-xs text-text-gray">
                    <span className="text-left ">{file.date}</span>
                    <span className=" text-right">{file.size}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </main>
    </section>
  )
}

export default Files