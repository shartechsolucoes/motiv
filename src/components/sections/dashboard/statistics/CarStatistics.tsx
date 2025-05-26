import { Box, Paper, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import CarStatisticsChart from './CarStatisticsChart';
import { areaChart } from 'data/dashboard/chartData';
import ChartLegend from './ChartLegend';

type ChartDataKey = keyof typeof areaChart;

const CarStatistics = () => {
  const areaChartRef = useRef<null | EChartsReactCore>(null);
  const [selectedOption, setSelectedOption] = useState<ChartDataKey>('day');
  const [currentDate] = useState(new Date());

  const handleChartLegend = (value: ChartDataKey) => {
    setSelectedOption(value);
    const areaChartData = areaChart[value];
    if (areaChartRef.current) {
      const chartInstance = areaChartRef.current.getEchartsInstance();
      chartInstance.setOption({
        series: [
          {
            data: areaChartData,
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

  const formattedDate = currentDate.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const areaChartData = areaChart[selectedOption];

  return (
    <Paper
      sx={(theme) => ({
        p: theme.spacing(1.875, 3, 1.25, 3),
      })}
    >
      <Stack rowGap={3} sx={{ mb: 1.75 }}>
        <Typography variant="h3">
          Estatisticas do{' '}
          <Box component="span" sx={{ fontWeight: 'fontWeightRegular' }}>
            Veiculos
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
          <Typography variant="subtitle2" component="p" sx={{ color: 'grey.700' }}>
            {formattedDate}
          </Typography>
          <Stack
            direction="row"
            columnGap={1.25}
            alignItems="center"
            bgcolor="neutral.lighter"
            borderRadius={6}
            width="max-content"
          >
            <ChartLegend
              active={selectedOption === 'day'}
              label="Dia"
              color="warning"
              onHandleClick={() => handleChartLegend('day')}
            />
            <ChartLegend
              active={selectedOption === 'week'}
              label="Semana"
              color="warning"
              onHandleClick={() => handleChartLegend('week')}
            />
            <ChartLegend
              active={selectedOption === 'month'}
              label="Ano"
              color="warning"
              onHandleClick={() => handleChartLegend('month')}
            />
          </Stack>
        </Stack>
      </Stack>
      <CarStatisticsChart
        areaChartRef={areaChartRef}
        data={areaChartData}
        xAxisLabels={generateXAxisLabels(selectedOption)}
        style={{ height: 223 }}
      />
    </Paper>
  );
};

export default CarStatistics;
