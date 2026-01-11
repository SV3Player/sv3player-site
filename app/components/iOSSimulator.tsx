'use client';

import { useState } from 'react';
import { Theme } from '../lib/themes';

interface iOSSimulatorProps {
  theme: Theme;
}

type ScreenView = 'library' | 'player' | 'settings';

export function IOSSimulator({ theme }: iOSSimulatorProps) {
  const [activeView, setActiveView] = useState<ScreenView>('library');

  const { colors, effects } = theme;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* View Switcher */}
      <div className="flex gap-2">
        {(['library', 'player', 'settings'] as ScreenView[]).map((view) => (
          <button
            key={view}
            onClick={() => setActiveView(view)}
            className="px-3 py-1.5 text-sm rounded-full capitalize transition-colors"
            style={{
              backgroundColor: activeView === view ? colors.accent : colors.surface,
              color: activeView === view ? colors.background : colors.textSecondary,
            }}
          >
            {view}
          </button>
        ))}
      </div>

      {/* iPhone Frame */}
      <div
        className="relative rounded-[3rem] p-3 shadow-2xl"
        style={{
          backgroundColor: '#1a1a1a',
          width: 320,
          height: 650,
        }}
      >
        {/* Screen */}
        <div
          className="relative w-full h-full rounded-[2.5rem] overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
          }}
        >
          {/* Dynamic Island / Notch */}
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full z-20"
            style={{ backgroundColor: '#000' }}
          />

          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-between px-8 pb-1 z-10">
            <span className="text-xs font-semibold" style={{ color: colors.textPrimary }}>
              9:41
            </span>
            <div className="flex items-center gap-1">
              <SignalIcon color={colors.textPrimary} />
              <WifiIcon color={colors.textPrimary} />
              <BatteryIcon color={colors.textPrimary} />
            </div>
          </div>

          {/* Content Area */}
          <div className="absolute inset-0 pt-14 pb-20">
            {activeView === 'library' && <LibraryView colors={colors} effects={effects} />}
            {activeView === 'player' && <PlayerView colors={colors} effects={effects} />}
            {activeView === 'settings' && <SettingsView colors={colors} effects={effects} />}
          </div>

          {/* Tab Bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 flex items-start justify-around pt-2"
            style={{
              backgroundColor: `${colors.surface}cc`,
              backdropFilter: 'blur(20px)',
            }}
          >
            <TabBarItem
              icon={<GridIcon />}
              label="Library"
              active={activeView === 'library'}
              colors={colors}
            />
            <TabBarItem
              icon={<PlayCircleIcon />}
              label="Player"
              active={activeView === 'player'}
              colors={colors}
            />
            <TabBarItem
              icon={<GearIcon />}
              label="Settings"
              active={activeView === 'settings'}
              colors={colors}
            />
          </div>

          {/* Home Indicator */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full"
            style={{ backgroundColor: colors.textTertiary }}
          />
        </div>
      </div>
    </div>
  );
}

// === Screen Views ===

function LibraryView({ colors, effects }: { colors: Theme['colors']; effects: Theme['effects'] }) {
  return (
    <div className="h-full px-3 pt-2 overflow-hidden">
      {/* Header */}
      <h1
        className="text-lg font-bold mb-3"
        style={{ color: colors.textPrimary }}
      >
        Library
      </h1>

      {/* Filter Tags */}
      <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
        {['All', 'Recent', 'Favorites'].map((tag, i) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full whitespace-nowrap"
            style={{
              backgroundColor: i === 0 ? colors.accent : colors.surface,
              color: i === 0 ? colors.background : colors.textSecondary,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="relative aspect-video rounded-lg overflow-hidden"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.glassEffectTint}${Math.round(effects.glassBorderOpacity * 255).toString(16).padStart(2, '0')}`,
            }}
          >
            {/* Placeholder gradient */}
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}40 0%, ${colors.secondary}40 100%)`,
              }}
            />
            {/* Play indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: `${colors.controlBackground}`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <PlayIcon color={colors.controlForeground} size={14} />
              </div>
            </div>
            {/* Duration badge */}
            <div
              className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[10px]"
              style={{
                backgroundColor: `${colors.background}cc`,
                color: colors.textSecondary,
              }}
            >
              {i}:23
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlayerView({ colors, effects }: { colors: Theme['colors']; effects: Theme['effects'] }) {
  // TikTok/Reels-style portrait layout matching FeedPlayerLayout.swift
  // Glass styling uses clear mode: subtle white fill + colored border
  const glassStyle = {
    backgroundColor: `rgba(255,255,255,0.06)`,
    border: `1px solid ${colors.glassEffectTint}${Math.round(effects.glassBorderOpacity * 255).toString(16).padStart(2, '0')}`,
    backdropFilter: 'blur(8px)',
  };

  return (
    <div className="h-full relative">
      {/* Video Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
        }}
      />

      {/* Upper Left Info Section */}
      <div className="absolute top-2 left-3 z-10 max-w-[65%]">
        {/* G_VideoStats - rating + play count */}
        <div className="flex items-center gap-2 mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} size={10} filled={i <= 4} color={colors.accent} />
            ))}
          </div>
          <span className="text-[9px]" style={{ color: colors.textTertiary }}>
            127 plays
          </span>
        </div>

        {/* T_TitleCard */}
        <h2 className="text-xs font-semibold leading-tight" style={{ color: colors.textPrimary }}>
          Sample Video Title
        </h2>

        {/* T_StudioInfo */}
        <p className="text-[10px] mb-1.5" style={{ color: colors.textTertiary }}>
          Studio Name
        </p>

        {/* G_CreatorChips */}
        <div
          className="inline-flex items-center gap-1 px-2 py-1 rounded-full mb-1.5"
          style={glassStyle}
        >
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: colors.secondary }}
          />
          <span className="text-[9px]" style={{ color: colors.textPrimary }}>
            Creator Name
          </span>
        </div>

        {/* B_BufferHealth */}
        <div className="flex items-center gap-1">
          <div
            className="h-1 w-16 rounded-full overflow-hidden"
            style={{ backgroundColor: colors.controlBackground }}
          >
            <div
              className="h-full w-4/5 rounded-full"
              style={{ backgroundColor: colors.success }}
            />
          </div>
          <span className="text-[8px]" style={{ color: colors.textTertiary }}>
            25s
          </span>
        </div>
      </div>

      {/* Top Right - Info + Queue buttons */}
      <div className="absolute top-2 right-3 flex gap-1.5 z-10">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ ...glassStyle, color: colors.controlForeground }}
        >
          <QueueIcon size={16} />
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ ...glassStyle, color: colors.controlForeground }}
        >
          <InfoIcon size={16} />
        </div>
      </div>

      {/* Right Edge Controls (G_RightEdgeControls) - positioned lower-middle */}
      <div className="absolute right-3 bottom-44 flex flex-col gap-2.5 items-center z-10">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ ...glassStyle, color: colors.controlForeground }}
        >
          <FilterIcon size={18} />
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ ...glassStyle, color: colors.controlForeground }}
        >
          <ShuffleIcon size={18} />
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ ...glassStyle, color: colors.controlForeground }}
        >
          <SettingsIcon size={18} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 z-10">
        {/* Playback Controls - Mute left, Play/Pause center */}
        <div className="relative flex items-center justify-center mb-3">
          {/* Mute button offset to the left */}
          <div
            className="absolute left-8 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ ...glassStyle, color: colors.controlForeground }}
          >
            <VolumeIcon size={18} />
          </div>
          {/* Play/Pause center */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ ...glassStyle, color: colors.controlForeground }}
          >
            <PauseIcon color={colors.controlForeground} size={24} />
          </div>
        </div>

        {/* G_TagScroller */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2">
          {['action', 'comedy', 'drama', 'featured'].map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[9px] rounded-full whitespace-nowrap"
              style={{
                backgroundColor: `${colors.secondary}30`,
                color: colors.textSecondary,
                border: `1px solid ${colors.secondary}50`,
              }}
            >
              #{tag}
            </span>
          ))}
          <span
            className="px-2 py-0.5 text-[9px] rounded-full"
            style={{
              backgroundColor: `${colors.accent}30`,
              color: colors.accent,
              border: `1px solid ${colors.accent}50`,
            }}
          >
            +
          </span>
        </div>

        {/* P_Timeline */}
        <div>
          <div
            className="h-1 rounded-full overflow-hidden"
            style={{ backgroundColor: `${colors.controlBackground}80` }}
          >
            <div
              className="h-full w-1/4 rounded-full"
              style={{ backgroundColor: colors.accent }}
            />
          </div>
          <div className="flex justify-between mt-0.5">
            <span className="text-[9px] font-mono" style={{ color: colors.textTertiary }}>
              0:45
            </span>
            <span className="text-[9px] font-mono" style={{ color: colors.textTertiary }}>
              3:00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsView({ colors, effects }: { colors: Theme['colors']; effects: Theme['effects'] }) {
  return (
    <div className="h-full px-3 pt-2">
      <h1 className="text-lg font-bold mb-4" style={{ color: colors.textPrimary }}>
        Settings
      </h1>

      {/* Settings Groups */}
      <div className="space-y-4">
        {/* Appearance Section */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            backgroundColor: `${colors.surface}${Math.round(effects.glassFillOpacity * 2 * 255).toString(16).padStart(2, '0')}`,
            border: `1px solid ${colors.glassEffectTint}${Math.round(effects.glassBorderOpacity * 255).toString(16).padStart(2, '0')}`,
          }}
        >
          <div className="px-3 py-2 border-b" style={{ borderColor: `${colors.glassEffectTint}30` }}>
            <span className="text-xs font-semibold" style={{ color: colors.textTertiary }}>
              APPEARANCE
            </span>
          </div>
          <SettingsRow
            label="Theme"
            value={
              <span className="text-xs" style={{ color: colors.accent }}>
                {/* Show current theme name preview */}
                Custom
              </span>
            }
            colors={colors}
          />
          <SettingsRow
            label="Glass Effects"
            value={<ToggleSwitch on={true} colors={colors} />}
            colors={colors}
            last
          />
        </div>

        {/* Playback Section */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            backgroundColor: `${colors.surface}${Math.round(effects.glassFillOpacity * 2 * 255).toString(16).padStart(2, '0')}`,
            border: `1px solid ${colors.glassEffectTint}${Math.round(effects.glassBorderOpacity * 255).toString(16).padStart(2, '0')}`,
          }}
        >
          <div className="px-3 py-2 border-b" style={{ borderColor: `${colors.glassEffectTint}30` }}>
            <span className="text-xs font-semibold" style={{ color: colors.textTertiary }}>
              PLAYBACK
            </span>
          </div>
          <SettingsRow
            label="Auto-play"
            value={<ToggleSwitch on={true} colors={colors} />}
            colors={colors}
          />
          <SettingsRow
            label="Quality"
            value={<span className="text-xs" style={{ color: colors.textSecondary }}>Auto</span>}
            colors={colors}
            last
          />
        </div>

        {/* Status Colors Preview */}
        <div
          className="rounded-xl p-3"
          style={{
            backgroundColor: `${colors.surface}${Math.round(effects.glassFillOpacity * 2 * 255).toString(16).padStart(2, '0')}`,
            border: `1px solid ${colors.glassEffectTint}${Math.round(effects.glassBorderOpacity * 255).toString(16).padStart(2, '0')}`,
          }}
        >
          <span className="text-xs font-semibold block mb-2" style={{ color: colors.textTertiary }}>
            STATUS COLORS
          </span>
          <div className="flex gap-2">
            <StatusBadge label="Success" color={colors.success} textColor={colors.textPrimary} />
            <StatusBadge label="Warning" color={colors.warning} textColor={colors.background} />
            <StatusBadge label="Error" color={colors.error} textColor={colors.textPrimary} />
            <StatusBadge label="Info" color={colors.info} textColor={colors.textPrimary} />
          </div>
        </div>
      </div>
    </div>
  );
}

// === Helper Components ===

function SettingsRow({
  label,
  value,
  colors,
  last = false,
}: {
  label: string;
  value: React.ReactNode;
  colors: Theme['colors'];
  last?: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between px-3 py-2.5"
      style={{ borderBottom: last ? 'none' : `1px solid ${colors.glassEffectTint}20` }}
    >
      <span className="text-sm" style={{ color: colors.textPrimary }}>
        {label}
      </span>
      {value}
    </div>
  );
}

function ToggleSwitch({ on, colors }: { on: boolean; colors: Theme['colors'] }) {
  return (
    <div
      className="w-11 h-6 rounded-full relative transition-colors"
      style={{ backgroundColor: on ? colors.success : colors.controlBackground }}
    >
      <div
        className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform"
        style={{ transform: on ? 'translateX(22px)' : 'translateX(2px)' }}
      />
    </div>
  );
}

function StatusBadge({ label, color, textColor }: { label: string; color: string; textColor: string }) {
  return (
    <span
      className="px-2 py-0.5 text-[10px] rounded-full"
      style={{ backgroundColor: color, color: textColor }}
    >
      {label}
    </span>
  );
}

function TabBarItem({
  icon,
  label,
  active,
  colors,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  colors: Theme['colors'];
}) {
  return (
    <div
      className="flex flex-col items-center gap-0.5"
      style={{ color: active ? colors.accent : colors.textTertiary }}
    >
      {icon}
      <span className="text-[10px]">{label}</span>
    </div>
  );
}

// === Icons ===

function SignalIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill={color}>
      <rect x="0" y="8" width="3" height="4" rx="1" />
      <rect x="4" y="5" width="3" height="7" rx="1" />
      <rect x="8" y="2" width="3" height="10" rx="1" />
      <rect x="12" y="0" width="3" height="12" rx="1" />
    </svg>
  );
}

function WifiIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill={color}>
      <path d="M8 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM3.5 6.5a6.5 6.5 0 019 0l-1 1a5 5 0 00-7 0l-1-1zM1 4a9.5 9.5 0 0114 0l-1 1a8 8 0 00-12 0l-1-1z" />
    </svg>
  );
}

function BatteryIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill={color}>
      <rect x="0" y="1" width="20" height="10" rx="2" stroke={color} strokeWidth="1" fill="none" />
      <rect x="2" y="3" width="14" height="6" rx="1" />
      <rect x="21" y="4" width="2" height="4" rx="0.5" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function PlayCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function PlayIcon({ color, size = 24 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <polygon points="6,4 20,12 6,20" />
    </svg>
  );
}

function PauseIcon({ color, size = 24 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function SkipBackIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="19,20 9,12 19,4" />
      <rect x="5" y="4" width="2" height="16" />
    </svg>
  );
}

function SkipForwardIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,4 15,12 5,20" />
      <rect x="17" y="4" width="2" height="16" />
    </svg>
  );
}

function HeartIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function InfoIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function QueueIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function SettingsIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function StarIcon({ size = 24, filled = false, color }: { size?: number; filled?: boolean; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function FilterIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ShuffleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  );
}

function VolumeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
