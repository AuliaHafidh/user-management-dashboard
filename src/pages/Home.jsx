import UserList from "../components/UserList";
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className="container">
            <h2>Data User</h2>

            <Link to={"/add"}>
            <button className="btn-primary btn-user" type="button">Tambah User</button>
            </Link>

            <hr />

            <UserList />
        </div>
    );
}

export default Home;