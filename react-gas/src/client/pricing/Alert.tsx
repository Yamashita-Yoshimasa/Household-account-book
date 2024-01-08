import {useState} from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter  } from '@coreui/react';

const Alert = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <CButton onClick={() => setVisible(!visible)}>Launch static backdrop modal</CButton>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Modal title</CModalTitle>
          </CModalHeader>
          <CModalBody>
            I will not close if you click outside me. Don't even try to press escape key.
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
          </CModalFooter>
        </CModal>
      </>
    )
}

export default Alert