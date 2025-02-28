import { Link } from "react-router-dom"

const Pagination = () => {
    return (
        <div className="row mt-5">
            <div className="col text-center">
                <div className="block-27">
                    <ul>
                        <li><Link to="#">&lt;</Link></li>
                        <li className="active"><span>1</span></li>
                        <li><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li><Link to="#">4</Link></li>
                        <li><Link to="#">5</Link></li>
                        <li><Link to="#">&gt;</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pagination