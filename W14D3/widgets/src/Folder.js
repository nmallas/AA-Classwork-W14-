import React from 'react';

import Headers from "./Headers"



class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        }
    }

    selectTab = (idx) => {
        this.setState({ currentTab: idx});
    }


    render() {
        const folder = this.props.folders[this.state.currentTab];
        const titles = [];
        this.props.folders.forEach(folder => titles.push(folder["title"]))

        return(
            <div>
                <h1>Folder</h1>
                <div className="tabs">
                    <div className="tab-header">
                        <Headers
                            titles={titles}
                            currentTab={this.state.currentTab}
                            selectTab={this.selectTab}
                        />
                    </div>
                        <div className="tab-content">
                            <div>{folder.content}</div>
                        </div>
                </div>
            </div>
        )
    }
}


export default Folder;
