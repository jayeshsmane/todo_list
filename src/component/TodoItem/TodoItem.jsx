import React, { useState } from 'react'
import { TodoCustomHook } from '../TodoContext/TodoContext'

function TodoItem({ item }) {

    const todoRender = TodoCustomHook()

    const [editVal, setEditVal] = useState(item.task);

    const [edit, setEdit] = useState(false)

    const deleteTaskFunc = (id) => {
        todoRender.deleteTask(id);
    }

    const completeTaskFunc = (id) => {
        todoRender.completeTask(id);
    }
    return (
        <div className='todo_item_wrapper'>
            <li className="todo_item">
                <button className="todo_items_left" onClick={() => completeTaskFunc(item.id)}>
                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="34" height="34" stroke="#22C55E" fill={item.status ? "#22C55E" : "#0D0D0D"}>
                        <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998"></circle>
                    </svg>
                </button>



                {
                    edit ? <input value={item.task} onInput={(e) => {
                        setEditVal(e.target.value);
                        item.task = e.target.value;
                    }} /> : <p>{item.task}</p>
                }


                <div className="todo_items_right">

                    {/* edit button */}
                    <button onClick={() => { edit ? setEdit(false) : setEdit(true) }}>
                        {edit ? <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit={2}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={34}
                        >
                            <path d="M20.285,5.285c-0.391,-0.39 -1.023,-0.39 -1.414,0l-10.285,10.285l-4.285,-4.285c-0.391,-0.39 -1.023,-0.39 -1.414,0c-0.39,0.391 -0.39,1.023 0,1.414l5,5c0.391,0.39 1.023,0.39 1.414,0l11,-11c0.39,-0.391 0.39,-1.023 0,-1.414z"
                                fillRule="nonzero" />
                        </svg> :
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="34">
                                <path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z" fillRule="nonzero"></path>
                            </svg>}
                    </button>

                    {/* delete button */}
                    <button onClick={() => deleteTaskFunc(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width="32" height="34">
                            <path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fillRule="nonzero"></path>
                        </svg>
                        <span className="visually-hidden">Delete</span>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default TodoItem
