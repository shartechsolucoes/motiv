import { Box, Paper, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { barChart } from 'data/dashboard/chartData';
import MilesStatisticsChart from './MilesStatisticsChart';
import ChartLegend from './ChartLegend';

type ChartDataKey = keyof typeof barChart;

const MilesStatistics = () => {
  const barChartRef = useRef<null | EChartsReactCore>(null);
  const [selectedOption, setSelectedOption] = useState<ChartDataKey>('day');
  const [barChartData, setBarChartData] = useState(barChart['day']);

  const handleChartLegend = (value: ChartDataKey) => {
    setSelectedOption(value);
    const selectedData = barChart[value];
    setBarChartData(selectedData);

    if (barChartRef.current) {
      const chartInstance = barChartRef.current.getEchartsInstance();
      chartInstance.setOption({
        series: [
          {
            data: selectedData,
          },
        ],
      });
    }
  };

  const generateXAxisLabels = (option: ChartDataKey) => {
    if (option === 'day') {
      return ['05', '07', '09', '11', '13', '15', '17', '19', '21', '23'];
    }
    if (option === 'week') {
      return ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    }
    if (option === 'month') {
      return ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    }
    return [];
  };

  return (
    <Paper
      sx={(theme) => ({
        p: theme.spacing(1.875, 3, 1.25, 3),
      })}
    >
      <Stack rowGap={3} sx={{ mb: 1.75 }}>
        <Typography variant="h3">
          KM{' '}
          <Box component="span" sx={{ fontWeight: 'fontWeightRegular' }}>
            Rodados
          </Box>
        </Typography>

        <Stack
          sx={{
            flexDirection: { sm: 'row' },
            justifyContent: { sm: 'space-between' },
            alignItems: { sm: 'center' },
            rowGap: { xs: 'inherit' },
          }}
        >
          <Stack direction="row" columnGap={1.25} alignItems={'center'}>
            <ChartLegend
              active={selectedOption === 'day'}
              label="Diário"
              onHandleClick={() => handleChartLegend('day')}
            />
            <ChartLegend
              active={selectedOption === 'week'}
              label="Semanal"
              onHandleClick={() => handleChartLegend('week')}
            />
            <ChartLegend
              active={selectedOption === 'month'}
              label="Mensal"
              onHandleClick={() => handleChartLegend('month')}
            />
          </Stack>

          <Typography variant="subtitle2" component="p" sx={{ color: 'grey.700' }}>
            26 KM
          </Typography>
        </Stack>
      </Stack>

      <MilesStatisticsChart
        barChartRef={barChartRef}
        data={barChartData}
        xAxisLabels={generateXAxisLabels(selectedOption)}
        style={{ height: 223 }}
      />
    </Paper>
  );
};

export default MilesStatistics;
