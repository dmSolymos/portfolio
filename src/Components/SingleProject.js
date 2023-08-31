

const SingleProject = ({id,title,paragraph,tech,link,git}) => {
  return (
    <div className={id}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <p>{tech}</p>
        <a href={link} className="link-web">{title}</a>
        <a href={git} className="link-git">Github Repo</a>
    </div>
  )
}
export default SingleProject