function ActressesList({ actresses }) {
    return (
        <>
            <div>
                <h2>Attrici</h2>
            </div>
            <div className="card-group">
                {actresses.map((actres) => (
                    <div key={actres.id} className="card m-2" style={{ minWidth: "18rem" }}>
                        <img src={actres.image} className="card-img-top actor-img" alt={actres.name} />
                        <div className="card-body">
                            <h5 className="card-title">{actres.name}</h5>
                            <p className="card-text">Born in {actres.birth_year}</p>
                            <p className="card-text">{actres.most_famous_movies}</p>
                            <p className="card-text">{actres.awards}</p>
                            <p className="card-text">{actres.biography}</p>
                            <p className="card-text">
                                <small>{actres.nationality}</small>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ActressesList