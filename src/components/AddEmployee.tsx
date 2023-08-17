import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../data/EmployeeService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployees } from './EmplopyeeSlice';


const AddEmployee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const employees = useSelector((state: any) => state.employees);

  const saveOrUpdateEmployee = (e: any) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    if (id) {
      EmployeeService.updateEmployee(id, employee).then((response) => {
        dispatch(setEmployees(response.data)); 
        setTimeout(() => {
          navigate('/employees');
        }, 500);
        toast('cập nhật thành công');
      });
    } else {
      EmployeeService.createEmployee(employee).then((response) => {
        dispatch(setEmployees(response.data)); 
        setTimeout(() => {
          navigate('/employees');
        }, 500);
        toast('thêm mới thành công');
      });
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(`${id}`).then((response) => {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setEmail(response.data.email);
    });
  }, []);

  const title = () => {
      if (id) {
          return <h1 className="text-center font-bold">Update Employee</h1>
      } else {
          return <h1 className="text-center font-bold">Add Employee</h1>
      }
  }
  
  return (
    <div className="max-w-xs grid mx-auto w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="card col-md-6 offset-md-3 offset-md-3">
            {
                title()
            }
            <div>
              <form>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-5"> First Name :</label>
                        <input
                            type="text"
                            placeholder="Enter first name"
                            name="firstName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        >
                        </input>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-5"> Last Name :</label>
                        <input
                            type="text"
                            placeholder="Enter last name"
                            name="lastName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        >
                        </input>
                    </div>

                    <div>
                          <label className="block text-gray-700 text-sm font-bold mb-2 mt-5"> Email Id :</label>
                          <input
                              type="email"
                              placeholder="Enter email Id"
                              name="email"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                          >
                          </input>
                    </div>
                      
                    <div className='flex'>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-5 mx-5" type="button" onClick={(e) => saveOrUpdateEmployee(e)} >Submit </button>
                          <Link to="/employees" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-5" type="button"> Cancel </Link>
                    </div>              
              </form>
            </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
};

export default AddEmployee;
