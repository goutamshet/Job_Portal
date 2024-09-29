import './job-info-card.css'
import edit from '../../../../Assets/edit.png'
import remove from '../../../../Assets/trash-can.png'
import companylogo from '../../../../Assets/company.png'
import work from '../../../../Assets/work.png'
import description from '../../../../Assets/job-description.png'
import salary from '../../../../Assets/payroll.png'
import jobtype from '../../../../Assets/job-type.png'
import location from '../../../../Assets/location.png'
import phone from '../../../../Assets/phone.png'
const JobInfoCard  = () => {
    return(
        <div className="job-info-card-container">
            {/* <div className='company-details-container'>
                <img className="company-logo" src={companylogo}/>
                <div className="company-name pd">
                    Company : Om Tours and Travels
                </div>
            </div>
            <div className="job-title pd">
                    Job : Driver
                </div>
            <div className="job-description pd">
                Description : Needed Drivers for car who can travel long distance
            </div>
            <div className="job-salary pd">
                Salary : Rs. 2000/travel
            </div>
            <div className="job-type pd">
                Job Type : Part Time Jobs
            </div>
            <div className="job-location pd">
                Location : Bengaluru
            </div>
            <div className="contact-no pd">
                Contact No : 9784548484
            </div> */}
            <div className="date-edit-container">
                <div className="post-date">
                    Posted On : 30-09-2024
                </div>
                <div className="edit-container">
                    <div className="icon-container">
                        <img className="edit-icon" src={edit}/>
                    </div>
                    <div className="icon-container">
                        <img className="remove-icon" src={remove}/>
                    </div>
                </div>
            </div>
            <table>
                <tr>
                    <th className="table-heading"><img className="company-logo" src={companylogo}/></th>
                    <td className="table-data">Om Tours and Travels</td>
                </tr>
                <tr>
                    <th className="table-heading"><img className="logo" src={work}/></th>
                    <td className="table-data">Driver</td>
                </tr>
                <tr>
                    <th className="table-heading"><img className="logo" src={description}/></th>
                    <td className="table-data">Wanted Experienced Driver to travel long distance at any time</td>
                </tr>
                <tr>
                    <th className="table-heading"><img className="logo" src={salary}/></th>
                    <td className="table-data">2000/travel</td>
                </tr>
                <tr>
                    <th className="table-heading"><img className="logo" src={jobtype}/></th>
                    <td className="table-data">Full Time</td>
                </tr>
                <tr>
                    <th className="table-heading"><img className="logo" src={location}/></th>
                    <td className="table-data">All Karnatka</td>
                </tr>
                <tr>
                    <th className=" table-heading"><img className="logo" src={phone}/></th>
                    <td className="table-data">9748548338</td>
                </tr>
            </table>
        </div>
    )
}

export default JobInfoCard
