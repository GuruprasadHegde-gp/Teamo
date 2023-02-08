const Header = ({ currentTeam, teamMemberCount }) => {

    return (
        <div className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8 text-center">
                    <h1 >Team Members</h1>
                    <h3>Total number of members in {currentTeam} is : {teamMemberCount}</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;