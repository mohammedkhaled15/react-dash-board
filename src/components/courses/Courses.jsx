import course1 from "../../assets/imgs/course1.jpg"
import course2 from "../../assets/imgs/course2.jpg"
import course3 from "../../assets/imgs/course3.jpg"
import course4 from "../../assets/imgs/course4.jpg"

import pers1 from "../../assets/imgs/man.jpg"
import pers2 from "../../assets/imgs/girl.jpg"
import pers3 from "../../assets/imgs/girl2.jpg"
import pers4 from "../../assets/imgs/man2.jpg"

import { BsFillPersonFill } from "react-icons/bs"
import { BsCurrencyDollar } from "react-icons/bs"

const courses = [
    {
        title: "Mastering Web Design",
        desc: "Master the art of web design and mocking a prototyping and creating web design archeticture",
        img: course1,
        instr: pers1,
        students: 800,
        price: 165
    },
    {
        title: "Data Structure and Algorithm",
        desc: "Master the art of web design and mocking a prototyping and creating web design archeticture",
        img: course2,
        instr: pers2,
        students: 1150,
        price: 210
    },
    {
        title: "Responsive Web Design",
        desc: "Master the art of web design and mocking a prototyping and creating web design archeticture",
        img: course3,
        instr: pers3,
        students: 750,
        price: 314
    },
    {
        title: "Mastering Python",
        desc: "Master the art of web design and mocking a prototyping and creating web design archeticture",
        img: course4,
        instr: pers4,
        students: 750,
        price: 314
    },
    {
        title: "Mastering Web Design",
        desc: "Master the art of web design and mocking a prototyping and creating web design archeticture",
        img: course1,
        instr: pers1,
        students: 800,
        price: 165
    },
    {
        title: "Data Structure and Algorithm",
        desc: "Master the art of web design and mocking a prototyping and creating web design archeticture",
        img: course2,
        instr: pers2,
        students: 1150,
        price: 210
    },
    {
        title: "Responsive Web Design",
        desc: "Master the art of web design and mocking a prototyping and creating web design archeticture",
        img: course3,
        instr: pers3,
        students: 750,
        price: 314
    },
    {
        title: "Mastering Python",
        desc: "Master the art of web design and mocking a prototyping and creating web design archeticture",
        img: course4,
        instr: pers4,
        students: 750,
        price: 314
    },
]

const Courses = () => {
    return (
        <section className='lg:col-span-10 col-span-11'>
            <h1 className='title'>Courses</h1>
            <main className='grid grid-cols-12 gap-2'>
                {
                    courses.map((course, index) =>
                        <article key={index} className='relative flex flex-col gap-2 col-span-12 md:col-span-6 lg:col-span-3 h-[300px]'>
                            <div className="w-full h-[50%] overflow-hidden">
                                <img src={course.img} className="w-full object-center object-cover" alt="bg" />
                            </div>
                            <span className="absolute w-14 left-2 top-2 h-14 rounded-full overflow-hidden"><img src={course.instr} alt="person" /></span>
                            <div className="px-2">
                                <h2 className="font-bold">{course.title}</h2>
                                <h6 className='text-text-gray text-2xs text-justify'>{course.desc}</h6>
                            </div>
                            <button className="btn btn-primary bg-[#0477FF] border-[#0477FF] hover:bg-[#0477FF] hover:border-[#0477FF] self-center p-2 h-auto min-h-fit text-xs my-1">Course Info</button>
                            <div className=" px-4 py-4 flex flex-row justify-between">
                                <span className='text-text-gray text-2xs flex flex-row gap-1 items-center'><BsFillPersonFill />{course.students}</span>
                                <span className='text-text-gray text-2xs flex flex-row gap-1 items-center'><BsCurrencyDollar />{course.price}</span>
                            </div>
                        </article>
                    )
                }
            </main>
        </section>
    )
}

export default Courses