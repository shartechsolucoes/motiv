import * as echarts from 'echarts/core';
import { TooltipComponent, GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { MutableRefObject, useMemo } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import { TooltipFormatter } from 'helpers/TooltipFormatter';
import { EChartsOption } from 'echarts-for-react';

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

interface ChartProps {
  barChartRef: MutableRefObject<EChartsReactCore | null>;
  data: number[] | null;
  xAxisLabels: string[];
  style?: {
    height?: number;
    width?: number;
  };
}

const MilesStatisticsChart = ({ barChartRef, data, xAxisLabels, style }: ChartProps) => {
  const theme = useTheme();

  const getBarChartOption = useMemo(() => {
    const barChartOption: EChartsOption = {
      color: theme.palette.primary.main,
      tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
          type: 'line',
        },
        backgroundColor: theme.palette.neutral.dark,
        textStyle: {
          color: theme.palette.common.white,
          fontSize: theme.typography.fontSize / 1.4,
        },
        formatter: TooltipFormatter,
        padding: [2, 9, 2, 8],
        extraCssText: 'border-radius: 0.3125rem;',
      },

      grid: {
        left: '0',
        right: '1',
        top: '0',
        bottom: '12%',
      },

      textStyle: {
        fontFamily: 'DM Sans',
        fontWeight: theme.typography.fontWeightRegular,
      },

      xAxis: [
        {
          type: 'category',
          data: xAxisLabels,
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: theme.palette.neutral.lighter,
            },
          },
          axisLine: {
            show: false,
          },
          axisLabel: { fontSize: theme.typography.fontSize },
        },
      ],

      yAxis: [
        {
          type: 'value',
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
      ],

      series: [
        {
          type: 'bar',
          barWidth: 28,
          data: data ?? [],
          cursor: 'none',
          emphasis: {
            focus: 'series',
            itemStyle: {
              color: theme.palette.primary.light,
            },
          },
        },
      ],
    };

    return barChartOption;
  }, [data, xAxisLabels, theme]);

  return (
    <ReactEchart echarts={echarts} option={getBarChartOption} ref={barChartRef} style={style} />
  );
};

export default MilesStatisticsChart;
