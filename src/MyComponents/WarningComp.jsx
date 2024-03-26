
const WarningComp = ({warning,StringName,Text}) => {
  return (
    <p
    className={`warningForm ms-2 ${
      warning.some((x) => x === StringName) ? "d-block" : "d-none"
    }`}
  >
    {Text}
  </p>
  )
}

export default WarningComp