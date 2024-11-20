'use client'
import { ChangeEvent, useState } from "react";

export default function Todo() {

    const [tasks, setTasks] = useState(['']);
    const [task, setTask] = useState("");


    const handleAddTask = () => {
        setTasks([...tasks, task])
        setTask("")
    }

    const handleTaskName = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleDeleteTask = (index: number) => {
        setTasks(tasks.filter((c, i) => {
            return i != index
        }))
    }

    return (
        <div className="main_body">
            <div>
                <h1>Simple To-Do Application</h1>
            </div>

            <div className="container-1">
                <input type="text" name="fruit" id="fruit" value={task}
                    onChange={(e) => handleTaskName(e)} />

                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <div className="container-2">

                <ul className="ul_map">
                    {
                        tasks.map((c, i) => {
                            return (
                                <li key={i} className="li_item">
                                    <div className="c">{c}</div>
                                    <button className="cut_button" onClick={() => handleDeleteTask(i)}>
                                        x
                                    </button>
                                </li>)
                        })

                    }

                </ul>
            </div>
        </div>

    );
}