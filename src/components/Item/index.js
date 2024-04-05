import './index.css'

const Item = props => {
  const {browserDetails, deleteBtn} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

  const onClickDeleteBtn = () => {
    deleteBtn(id)
  }

  return (
    <li className="list-item-card">
      <div className="time-and-url-container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} className="domain-logo" alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>

      <button
        onClick={onClickDeleteBtn}
        data-testid="delete"
        type="button"
        className="delete-btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Item
