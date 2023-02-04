const Header = ({ currentTeam, teamMemberCount }) => {
    return (
        <div>
            <h1 >This is a Header</h1>
            <p>Total number of members in {currentTeam} is : {teamMemberCount}</p>
        </div>
    )
}

export default Header;