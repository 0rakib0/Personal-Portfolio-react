const Title = ({title, summary}) =>{
    return (
        <div className="my-4 text-center">
            <h4 className="text-4xl font-semibold">{title}</h4>
            <p className="tracking-widest mt-2 text-secondaryColor">{summary}</p>
        </div>
    )
}

export default Title