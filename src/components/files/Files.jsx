import { FileIcon } from "react-file-icon"
import { BiDownload } from "react-icons/bi"
import Divider from "../utilitis/Divider"
import { BsFillFilePdfFill } from "react-icons/bs"

const files = Array(24).fill({
  bgColor: "red",
  extension: "pdf",
  name: "my-file",
  uploader: "Admin",
  date: "16 / 5 / 2021",
  size: "2.1MB",
})

const fileColl = Array(4).fill({
  icon: BsFillFilePdfFill,
  bgColor: "gray",
  name: "PDF Files",
  count: 120,
  size: "1.2 GB"
})

const Files = () => {
  return (
    <section className='lg:col-span-10 col-span-11'>
      <h1 className='title'>Files</h1>
      <main className='flex gap-2 '>
        <div className="w-[60%] md:w-[75%] lg:w-[80%] grid grid-cols-12 gap-1">
          {
            files.map((file, index) => {
              return (
                <div key={index} className=" p-1 bg-white rounded-lg col-span-12 md:col-span-4 lg:col-span-3">
                  <span className="mb-2"><BiDownload color={"#ccc"} /></span>
                  <div className="w-[30%] mx-auto mb-2">
                    <FileIcon color={file.bgColor} extension={file.extension} type="acrobat" />
                  </div>
                  <h6 className="text-center text-sm mb-2">{file.name + "." + file.extension}</h6>
                  <h6 className="text-text-gray text-sm">{file.uploader}</h6>
                  <Divider />
                  <div className="text-xs text-text-gray flex justify-between">
                    <span className="text-left ">{file.date}</span>
                    <span className=" text-right">{file.size}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="h-[20%] flex-1 bg-white rounded-lg flex gap-2 flex-col p-2">
          <h2 className="font-bold">File Statistics</h2>
          {
            fileColl.map((col, index) => {
              return (
                <div className="w-full p-2 border border-1 flex items-center gap-1 flex-col lg:flex-row rounded-lg">
                  <div className="p-2 w-8" style={{ backgroundColor: `${col.bgColor}` }} >{<col.icon />}</div>
                  <div className="flex w-full justify-between items-center text-xs">
                    <div className="flex flex-col justify-start">
                      <span className="font-bold">{col.name}</span>
                      <span className="text-text-gray">{col.count}</span>
                    </div>
                    <div className="text-text-gray">{col.size}</div>
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