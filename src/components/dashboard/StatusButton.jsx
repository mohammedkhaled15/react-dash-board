const statusBtn = {
    pending: "btn-warning",
    completed: "btn-success",
    rejected: "btn-error",
    inProgress: "btn-primary"
}
const StatusButton = ({ status }) => {
    return (
        <div className={`${statusBtn[`${status}`]} btn btn-xs text-white`}>{status}</div>
    )
}

export default StatusButton