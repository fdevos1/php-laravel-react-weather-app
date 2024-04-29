import Icon from "./icons/icon";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="flex justify-center gap-2">
                    <a href="https://github.com/fdevos1" target="_blank">
                        <Icon name="github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/felipe-devos-5540ab195/"
                        target="_blank"
                    >
                        <Icon name="linkedin" />
                    </a>
                </div>
            </footer>
        </>
    );
}
