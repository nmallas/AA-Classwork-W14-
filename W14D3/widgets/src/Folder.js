import React from 'react';

// const Headers = ({ titles, currentTab, selectTab }) => {
//     return (
//       <ul className='tab-header'>
//         {titles.map((title, idx) => {
//           return (
//             <li key={idx} onClick={currentTab}>
//               {title}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }


const Headers = ({ folder.titles, currentTab, selectTab }) => {
    const tabs = titles.map((title, idx) => {
        return (
            <li key={idx}>
            {title}
            </li>
        );
    })

    return (
        <ul className='tab-header'>
        {tabs}
        </ul>
    );
}

class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        }
    }

    selectTab = (idx) => {

    }

    render() {
        const folder = this.props.folders[this.state.currentTab];
        // const {title} = this.props;
        return(
            <div>
                <h1>Folder</h1>
                <div className="tabs">
                    {Headers(this.props)}
                    <div>
                        {folder.content}
                    </div>
                </div>
            </div>
        )
    }
}


export default Folder;
