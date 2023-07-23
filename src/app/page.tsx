import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '@/components/ui/Button/Button'

export default function Home() {
    return (
        <main className="font-kanit">
            <Button
                size="md"
                variant="contained"
                color="success"
                loading
                startIcon={
                    <FontAwesomeIcon
                        icon={faCoffee}
                        className="w-6 text-white"
                    />
                }
                endIcon={
                    <FontAwesomeIcon
                        icon={faCoffee}
                        className="w-6 text-white"
                    />
                }
            >
                ERROR
            </Button>
        </main>
    )
}
