import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../theme';
import { PawPrint, User } from 'lucide-react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PawPrint size={48} color={colors.primary} />
        <Text style={styles.title}>Welcome to Pet App</Text>
        <Text style={styles.subtitle}>Your best friend's best friend</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.card}>
          <User size={24} color={colors.primary} />
          <Text style={styles.cardText}>Manage Profiles</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: spacing.md,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardText: {
    marginLeft: spacing.md,
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
});

export default HomeScreen;
