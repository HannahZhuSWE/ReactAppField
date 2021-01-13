const Table = () => {
    const data = require("../data.json");
    const headers = [<td>Name &emsp;&emsp;</td>,
                     <td>Age &emsp;&emsp;</td>, 
                     <td>Option &emsp;&emsp;</td>];
    let cells : Array<JSX.Element> = [];

    for(var x in data){
        cells.push(<tr>
                        <td> {data[x].name}</td>
                        <td> {data[x].age}</td>
                        <td> {data[x].option}</td>
                    </tr>)
    }
    return (<table>
                <thead>
                    <tr>{headers}</tr>
                </thead>
                <tbody>
                    {cells}
                </tbody>
            </table>)
}

export{Table}