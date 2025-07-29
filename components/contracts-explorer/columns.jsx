import { Button } from "../ui/button";

export const contractColumns = [
  {
    accessorKey: "sociedadeSigla",
    header: "Contratos",
  },
  {
    accessorKey: "paisNome",
    header: "País",
  },
  {
    accessorKey: "tipoContrato",
    header: "Tipo de contrato",
  },
  {
    id: "actions",
    header: "Mapa",
    cell: ({ row, table }) => {
      const onSeeOnMap = table.options.meta.onSeeOnMap;
      return (
        <Button
          onClick={() => onSeeOnMap(row.original.iso)}
          variant="link"
          className="px-0"
        >
          Ver no mapa
        </Button>
      );
    },
  },
];
