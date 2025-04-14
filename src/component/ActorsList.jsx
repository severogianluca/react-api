function ActorList({ actors }) {
    return (
        <>
            <div>
                <h1>Attori</h1>
            </div>
            <div className="card-group">
                {actors.map((actor) => (
                    <div key={actor.id} className="card m-2" style={{ minWidth: "18rem" }}>
                        <img src={actor.image} className="card-img-top actor-img" alt={actor.name} />
                        <div className="card-body">
                            <h5 className="card-title">{actor.name}</h5>
                            <p className="card-text">Born in {actor.birth_year}</p>
                            <p className="card-text">{actor.most_famous_movies}</p>
                            <p className="card-text">{actor.awards}</p>
                            <p className="card-text">{actor.biography}</p>
                            <p className="card-text">
                                <small>{actor.nationality}</small>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ActorList