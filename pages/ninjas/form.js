const Form = () => {
    return (
        <div>
            <form action="/api/posts/form" method="POST"> 
                <label>Name : </label>
                <input type="text" name="name"></input>
                <label>Email :</label>
                <input type="email" name="email"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;