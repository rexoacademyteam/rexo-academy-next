/*
    A simple playground for testing features
*/

import Modal from "@/components/core/modal";
import ModalBody from "@/components/core/modal/body";
import ModalFooter from "@/components/core/modal/footer";
import ModalHeader from "@/components/core/modal/header";
import { useState } from "react";

export default function Playground() {
    const [open, setopen] = useState(false)

    return (
        <div className="container mx-auto max-w-6xl py-4">
            <button onClick={() => setopen(true)} className="btn">بازکردن</button>
            <Modal open={open} onClose={() => setopen(false)}>
                <ModalHeader onClose={() => setopen(false)} title="Title !" />
                <ModalBody>
                    Hii
                </ModalBody>
                <ModalFooter>
                    <button onClick={() => setopen(false)} className="btn btn-blue">بستن</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
