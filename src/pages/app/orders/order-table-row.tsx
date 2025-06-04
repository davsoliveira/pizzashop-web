import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { Search, ArrowRight, X } from "lucide-react";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size='xs'>
          <Search className='h-3 w-3'>
            <span className='sr-only'>Detalhes do pedido</span>
          </Search>
        </Button>
      </TableCell>
      <TableCell className='font-mono text-sm font-medium'>83da13h180dj2ds09</TableCell>
      <TableCell className='text-muted-foreground'>há 15 minutos</TableCell>
      <TableCell>
        <div className='flex items-center gap-2'>
          <span className='h-2 w-2 rounded-full bg-slate-400' />
          <span className='font-medium text-muted-foreground'>Pendente</span>
        </div>
      </TableCell>
      <TableCell className='font-medium'>
        Davi Oliveira dos Santos
      </TableCell>
      <TableCell className='font-medium'>
        R$ 149,90
      </TableCell>
      <TableCell>
        <Button>
          <ArrowRight />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant='ghost' size='xs'>
          <X className='mr-2 h-3 w-3' />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}