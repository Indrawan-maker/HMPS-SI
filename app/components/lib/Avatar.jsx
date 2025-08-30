export default function Avatar() {
    return (
        <>
            <div className="avatar-group -space-x-6">
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                    </div>
                </div>
                <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-12">
                        <span>+22</span>
                    </div>
                </div>
            </div>
        </>
    )
}