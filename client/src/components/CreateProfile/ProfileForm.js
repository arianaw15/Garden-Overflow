import React from 'react'

const ProfileForm = ({username, email,}) => {
    return (
        <div>
            <form action="/api/createuser" method="POST" id="createUserForm">
                <input name="userName" type="hidden" value={username}></input>
                <input name="email" type="hidden" value={email}></input>
                <input name="garden" type="hidden" value={[]}></input>
                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="zone">
                    <option selected>What hardiness zone do you live in?</option>
                    <option value="1">Zone 1</option>
                    <option value="2">Zone 2</option>
                    <option value="3">Zone 3</option>
                    <option value="4">Zone 4</option>
                    <option value="5">Zone 5</option>
                    <option value="6">Zone 6</option>
                    <option value="7">Zone 7</option>
                    <option value="8">Zone 8</option>
                    <option value="9">Zone 9</option>
                    <option value="10">Zone 10</option>
                    <option value="11">Zone 11</option>
                    <option value="12">Zone 12</option>
                    <option value="13">Zone 13</option>
                </select>
                <div className="userSubmitBtn userSubmitBtn3"><span>Submit</span></div>
            </form>
        </div>
    )
}

export default ProfileForm
