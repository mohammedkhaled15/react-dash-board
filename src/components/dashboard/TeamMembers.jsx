
const TeamMembers = ({ members }) => {
    return (
        <div className="flex flex-row items-center overflow-hidden -space-x-2 ">
            {
                members.map((member, index) =>
                    <img key={index} src={member} alt="member" className="inline-block w-6 h-6 ring-2 ring-white rounded-full" />
                )
            }
        </div>
    )
}

export default TeamMembers