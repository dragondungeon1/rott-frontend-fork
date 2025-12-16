import AppShell from '@/components/AppShell';
import { DataTable, DataTableBuilder } from '@/components/DataTable';
import { School } from '@mui/icons-material';

export default function Test() {

    const students = [
        { name: 'Lennart de Ridder', grade: 8.4 },
        { name: 'Maurice van Bruggen', grade: 7.5 },
        { name: 'Tim Jonkers', grade: 7.5 },
    ];

    const tableConfig = new DataTableBuilder()
        .setTitle('Klasgemiddelde', <School />)
        .addColumn('text', { header: 'Leerling', field: 'name' })
        .addColumn('badge', { header: 'Gemiddelde', field: 'grade', align: 'center' })
        .setData(students)
        .setFooter({ name: 'Klasgemiddelde', grade: 7.6 }, 'Klasgemiddelde')
        .build();

    return (
        <AppShell>{{
            appBarButtons: null,
            body: (
                <DataTable config={tableConfig} />
            )
        }}</AppShell>
    );
}
