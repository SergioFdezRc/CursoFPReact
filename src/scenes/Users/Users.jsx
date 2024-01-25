import React, {lazy, useCallback, useEffect, useRef, useState} from "react";
import "./Users.css";
import {Spinner} from "../../components/Spinner/Spinner";
import {connect} from "react-redux";
import {userActionRequestFailed, userActionRequestStarted, userActionRequestSuccess} from "../../actions";
import {getUsers} from "../../selectors";

const UserLazy = lazy(() => import("./User"));

const url = "https://randomuser.me/api/?results=5";

const AddIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/>
    </svg>
);

function Users(props) {
    const [data, setData] = useState([]);
    const [user, setUser] = useState({
        id: {
            value: "0"
        },
        name: {
            title: "Mr",
            first: "",
            last: ""
        },
        picture: {
            large: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    });

    const nameRef = useRef(null);
    const lastNameRef = useRef(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    const query = {
                        res: res.json(),
                    };
                    props.onLoadUsersStarted(query);
                    return res.json()
                })
                .then((data) => {
                    props.onLoadUsersSuccess(data.results);
                })
                .catch((err) => {
                    props.onLoadUsersFailed(err)
                });
        }, 2000);

        nameRef.current.focus();
    }, []);

    useEffect(() => {

    }, [props.users]);

    const addItem = (item) => {
        if (!item) return;
        setData([...data, item]);
        nameRef.current.value = "";
        lastNameRef.current.value = "";
    }

    const deleteItem = useCallback((id) => {
        setData(data.filter((item) => item.id !== id))
    }, [data]);

    const handleChangeName = (name) => {
        const _user = {...user};
        _user.name.first = name;
        setUser({..._user});
    }
    const handleChangeLastName = (lastName) => {
        const _user = {...user};
        _user.name.last = lastName;
        setUser({..._user});
    }
    console.log("Renderizando Users");

    return (
        <div className="page-container">
            <h1>Users</h1>
            <div className="add-item-form">
                <h2>Add User</h2>
                <div className="input-item">
                    <label htmlFor={"name"}>Name</label>
                    <input ref={nameRef} name="name" type="text" onChange={(e) => handleChangeName(e.target.value)}/>
                </div>
                <div className="input-item">
                    <label htmlFor={"lastName"}>Last Name</label>
                    <input ref={lastNameRef} name="lastName" type="text"
                           onChange={(e) => handleChangeLastName(e.target.value)}/>
                </div>
                <button className="round-btn" onClick={() => addItem(user)}><AddIcon/></button>
            </div>
            <div className="users-container">
                <>
                    {props.error && <p>{props.error}</p>}
                    {props.isLoading && <Spinner/>}
                    {data?.length > 0 &&
                        data.map((item, index) => {
                                item["id"] = index;
                                return (
                                    <UserLazy key={index} id={index} item={item} onDelete={deleteItem}/>
                                )
                            }
                        )}
                </>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    isLoading: state.userState.isLoading,
    error: state.userState.error,
});

const mapDispatchToProps = (dispatch) => ({
    onLoadUsersStarted: (query) => dispatch(userActionRequestStarted(query)),
    onLoadUsersSuccess: (usersInfo) => dispatch(userActionRequestSuccess(usersInfo)),
    onLoadUsersFailed: (error) => dispatch(userActionRequestFailed(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);