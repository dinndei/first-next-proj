import Image from "next/image"

const Card = () => {
    return (
        <div>
            <div className="w-30">
                <Image src="https://www.tiptipot.co.il/_uploads/extraimg/Baby%20Emotional%20development(1).jpg"
                width={200}
                height={200}
                alt="img"
                />
            </div>
            <div className="">desc</div>
           
            <div className="button">button</div>
        </div>
    );
}

export default Card;