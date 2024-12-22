import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { useState } from 'react';

export const useCodeState = () => {
  const [code, setCode] = useState<string>('');
  const [feedback, setFeedback] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const submitCode = async () => {
    if (!code.trim()) {
      setFeedback([
        {
          title: 'Action Required',
          description: 'Please provide code to proceed with the review.',
          isError: true,
          icon: (
            <ReportProblemIcon
              style={{ color: '#d32f2f', marginRight: '8px' }}
            />
          ), // Icon for attention
        },
      ]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch feedback');
      }

      const data = await response.json();

      setFeedback(
        Array.isArray(data.feedback)
          ? data.feedback
          : [{ title: 'Error', description: 'Unexpected feedback format.' }],
      );
    } catch (error) {
      console.error('Error fetching feedback:', error);
      setFeedback([
        {
          title: 'Error',
          description: 'Error fetching feedback. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearCode = () => {
    setCode('');
    setFeedback([]);
  };

  return {
    code,
    setCode,
    feedback,
    setFeedback,
    isLoading,
    submitCode,
    clearCode,
  };
};
