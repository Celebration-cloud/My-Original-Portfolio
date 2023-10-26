import './AddressFooter.css'
function AddressFooter() {
  return (
    <>
      <div className="footContact row">
        <div className="col">
          <h5>ADDRESS</h5>
          <p>
            Celebration Inc.
            <br />
            Lagos, Nigeria.
            <br />
            Africa.
          </p>
        </div>
        <div className="col">
          <h5>SOCIAL</h5>
          <ul>
            <li className="linkMedia">
              <a href="https://www.facebook.com/profile.php?id=100074247399727">
                Facebook
              </a>
            </li>
            <li className="linkMedia">
              <a href="#">Twitter</a>
            </li>
            <li className="linkMedia">
              <a href="#">WhatsApp</a>
            </li>
            <li className="linkMedia">
              <a href="linkedin.com/in/celebration-ojingulu-45b495246">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h5>CALL ME</h5>
          <p>
            +2349014194307
            <br />
            +2348144112297
          </p>
        </div>
        <div className="col">
          <h5>MY EMAIL</h5>
          <p>ojinguluc@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default AddressFooter
