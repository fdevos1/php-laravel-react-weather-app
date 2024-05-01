import Input from "./Input";

export default function Searchbar({ searchTerm, setSearchTerm }) {
    return (
        <Input
            placeholder="Insira o que deseja buscar"
            value={searchTerm}
            onChange={setSearchTerm}
        />
    );
}
