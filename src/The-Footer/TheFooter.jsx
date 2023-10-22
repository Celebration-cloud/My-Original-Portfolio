import AddressFooter from './AddressFooter/AddressFooter';
import LastFooter from './LastFooter/LastFooter';
import './TheFooter.css'
function TheFooter() {
  return (
    <>
      <footer className="foot main-footer">
        <div>
          <AddressFooter/>
          <div>
            <LastFooter/>
          </div>
        </div>
      </footer>
    </>
  );
}

export default TheFooter
